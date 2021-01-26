import * as React from 'react'
import {loadAccount} from 'lib/accounts'
import {GetServerSideProps} from 'next'
import {getTokenFromCookieHeaders} from 'utils/auth'
import LoginRequired, {LoginRequiredParams} from 'components/login-required'
import axios from 'axios'
import Link from 'next/link'
import {useViewer} from 'context/viewer-context'
import {track} from '../../utils/analytics'
import {Formik} from 'formik'
import * as yup from 'yup'

const emailChangeSchema = yup.object().shape({
  email: yup.string().email().required('enter your email'),
})

export type RequestEmailChangeFormProps = {
  originalEmail: string
}

async function requestEmailChange(newEmail: string) {
  const {data} = await axios.post(
    `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/api/v1/email_change_requests`,
    {
      email: newEmail,
    },
  )

  return data
}

const RequestEmailChangeForm: React.FunctionComponent<RequestEmailChangeFormProps> = ({
  originalEmail,
}) => {
  const VIEW_MODE = 'VIEW_MODE'
  const EDIT_MODE = 'EDIT_MODE'
  const [mode, setMode] = React.useState(VIEW_MODE)

  const [
    changeRequestSubmittedFor,
    setChangeRequestSubmittedFor,
  ] = React.useState<string | null>(null)

  return (
    <Formik
      initialValues={{email: originalEmail}}
      validationSchema={emailChangeSchema}
      onSubmit={async (values) => {
        await requestEmailChange(values.email)
        setChangeRequestSubmittedFor(values.email)
        setMode(VIEW_MODE)
      }}
    >
      {(props) => {
        const {
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        } = props
        return (
          <>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl border-b">Email</h2>
                <p>Your email address:</p>
                {mode === EDIT_MODE && (
                  <p className="text-sm text-gray-600">
                    To ensure that you have access to this email address, we
                    will send an email to that account with a confirmation link.
                  </p>
                )}
                {changeRequestSubmittedFor && (
                  <p className="text-sm text-gray-600">
                    Your email change request has been received. A confirmation
                    email has been sent to {changeRequestSubmittedFor}.
                  </p>
                )}
                <div className="flex flex-row space-x-2">
                  <input
                    id="email"
                    type="email"
                    value={mode === VIEW_MODE ? originalEmail : values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@company.com"
                    required
                    disabled={isSubmitting || mode !== EDIT_MODE}
                    className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal"
                  />
                  {mode === VIEW_MODE && (
                    <button
                      onClick={() => setMode(EDIT_MODE)}
                      className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded"
                    >
                      Edit
                    </button>
                  )}
                  {mode === EDIT_MODE && (
                    <>
                      <button
                        type="submit"
                        className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                      <button
                        onClick={() => {
                          setFieldValue('email', originalEmail)
                          setMode(VIEW_MODE)
                        }}
                        className="text-black bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </>
        )
      }}
    </Formik>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  req,
  params,
}) {
  const {loginRequired, eggheadToken} = getTokenFromCookieHeaders(
    req.headers.cookie as string,
  )
  const account: any =
    params?.slug && (await loadAccount(params.slug as string, eggheadToken))
  return {
    props: {
      loginRequired,
      account,
    },
  }
}

type ViewerAccount = {
  stripe_customer_id: string
  slug: string
}

const Account: React.FunctionComponent<
  LoginRequiredParams & {account: ViewerAccount}
> = ({loginRequired, account = {}}) => {
  const [subscriptionData, setSubscriptionData] = React.useState<any>()
  const {stripe_customer_id, slug} = account
  const {viewer} = useViewer()

  const {email: currentEmail} = viewer || {}

  const recur = (price: any) => {
    const {
      recurring: {interval, interval_count},
    } = price

    if (interval === 'month' && interval_count === 3) return 'quarter'
    if (interval === 'month' && interval_count === 6) return '6-months'
    if (interval === 'month' && interval_count === 1) return 'month'
    if (interval === 'year' && interval_count === 1) return 'year'
  }
  React.useEffect(() => {
    if (stripe_customer_id) {
      axios
        .get(`/api/stripe/billing/session`, {
          params: {
            customer_id: stripe_customer_id,
            account_slug: slug,
          },
        })
        .then(({data}) => {
          if (data) {
            setSubscriptionData(data)
          }
        })
    }
  }, [stripe_customer_id, slug])

  const subscriptionName = subscriptionData && subscriptionData.product?.name
  const subscriptionPrice =
    subscriptionData?.price &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscriptionData.price.currency,
      minimumFractionDigits: 0,
    }).format(subscriptionData.price.unit_amount / 100)

  return (
    <LoginRequired loginRequired={loginRequired}>
      <main className="pb-10 lg:py-3 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          {/* Account details */}
          <div className="sm:px-6 lg:px-0 lg:col-span-9">
            <RequestEmailChangeForm originalEmail={currentEmail} />
          </div>
          {/* Payment details */}
          <div className="sm:px-6 lg:px-0 lg:col-span-9">
            {subscriptionData && (
              <section className="mb-32">
                <div className="p-4 w-full">
                  <div className="border border-accents-1	w-full p rounded-md m-auto my-8 max-w-max-content">
                    {subscriptionName ? (
                      <div className="px-5 py-4">
                        <h3 className="text-2xl mb-1 font-medium">
                          ⭐️ You're an <strong>egghead Member!</strong>
                        </h3>
                        <p className="text-accents-5">
                          You can update your plan and payment information below
                          via Stripe.
                        </p>
                        <div className="mt-8 mb-4 font-semibold">
                          {!subscriptionData?.portalUrl ? (
                            <div className="h-12 mb-6">loading</div>
                          ) : subscriptionPrice ? (
                            <div className="flex flex-col space-x-2 items-center">
                              <div>
                                You are currently paying{' '}
                                {`${subscriptionPrice}/${recur(
                                  subscriptionData.price,
                                )}`}{' '}
                                for your membership
                              </div>
                              {subscriptionData?.subscription
                                ?.cancel_at_period_end && (
                                <div className="rounded text-xs px-2 py-1 flex justify-center items-center bg-gray-100">
                                  cancelled
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link href="/pricing">
                              <a
                                onClick={() => {
                                  track(`clicked pricing`, {
                                    location: 'accounts',
                                  })
                                }}
                              >
                                Join today!
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="px-5 py-4">
                        <h3 className="text-2xl mb-1 font-medium">
                          No paid subscription found.
                        </h3>
                        {(viewer.is_pro || viewer.is_instructor) && (
                          <p>
                            You still have access to a Pro Membership. If you
                            feel this is in error please email{' '}
                            <a
                              className="text-blue-600 hover:text-blue-700 underline"
                              href="mailto:support@egghead.io"
                            >
                              support@egghead.io
                            </a>
                          </p>
                        )}
                        <p className="py-3">
                          You can still update your payment information below
                          via Stripe.
                        </p>
                      </div>
                    )}
                    {subscriptionData && (
                      <div className="border-t border-accents-1 bg-primary-2 p-4 text-accents-3 rounded-b-md">
                        <div className="flex flex-col items-start justify-between  sm:items-center">
                          {subscriptionData?.subscription
                            ?.cancel_at_period_end && (
                            <p className="pb-4 sm:pb-0">
                              Your account is currently cancelled. You'll have
                              access until the end of your current billing
                              period. You can also renew at any time.
                            </p>
                          )}
                          {subscriptionData?.portalUrl && (
                            <Link href={subscriptionData.portalUrl}>
                              <a
                                onClick={() => {
                                  track(`clicked manage membership`)
                                }}
                                className="w-full mt-4 text-center transition-all duration-150 ease-in-out bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:scale-105 transform hover:shadow-xl text-white font-semibold py-3 px-5 rounded-md"
                              >
                                Manage Your Membership
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </LoginRequired>
  )
}

export default Account
