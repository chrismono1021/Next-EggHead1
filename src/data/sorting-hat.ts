const sortingHat = {
  biggest_path: {
    question_heading: `Welcome!`,
    question_text: `What brings you to egghead?`,
    question_type: `multiple-choice`,
    random: true,
    other: true,
    other_label: `something else`,
    choices: [
      {
        answer: `leveling_up`,
        label: `Level up my dev skills`,
      },
      {
        answer: `optimizing_code`,
        label: `Optimize my code`,
      },
    ],
    next: {
      leveling_up: `level_up_reason`,
      optimizing_code: `optimizing_reason`,
      other: `egghead_help_freeform`,
    },
  },
  level_up_reason: {
    question_heading: `Oh nice, dev skills!`,
    question_text: `What's your biggest motivation?`,
    question_type: `multiple-choice`,
    random: true,
    other: true,
    other_label: `none of the above`,
    choices: [
      {
        answer: `bigger_projects`,
        label: `Working on bigger projects`,
      },
      {
        answer: `advancing_career`,
        label: `Advancing my career`,
      },
      {
        answer: `new_role`,
        label: `Just took a new role`,
        always_last: true,
      },
    ],
    next: {
      bigger_projects: `level_up_goal`,
      advancing_career: `last_portfolio_update`,
      new_role: `level_up_goal`,
      other: `egghead_help_freeform`,
    },
  },
  optimizing_reason: {
    question_heading: `Ok, optimizing code!`,
    question_text: `What's the biggest reason?`,
    question_type: `multiple-choice`,
    random: true,
    other: true,
    other_label: `none of the above`,
    choices: [
      {
        answer: `maintainability`,
        label: `Better maintainability of code base`,
      },
      {
        answer: `performance`,
        label: `Faster performance`,
      },
      {
        answer: `launch_prep`,
        label: `Preparing to launch an app`,
      },
    ],
    next: `thanks`,
  },
  egghead_help_freeform: {
    question_heading: `Ohh, tell us more!`,
    question_text: `What **are** you hoping egghead can help you with, in the big picture?`,
    question_type: `multi-line`,
    other: true,
    other_label: `I'd rather not say...`,
    next: {
      other: `opt_out`,
      all: `thanks`,
    },
  },
  last_portfolio_update: {
    question_heading: `Career Advancement. Gotcha.`,
    question_text: `When did you last update your developer portfolio?`,
    question_type: `multiple-choice`,
    random: true,
    other: true,
    other_label: `what's a developer portfolio?`,
    choices: [
      {
        answer: `recently`,
        label: `Recently. It's up to date!`,
      },
      {
        answer: `been_awhile`,
        label: `It's been awhile...`,
      },
      {
        answer: `no_portfolio`,
        label: `I don't have a developer portfolio.`,
      },
    ],
    next: {
      recently: `portfolio_outreach`,
      been_awhile: `portfolio_outreach`,
      no_portfolio: `portfolio_outreach`,
      other: `portfolio_faq`,
    },
  },
  portfolio_faq: {
    question_heading: `Want to learn more?`,
    question_text: `We thing developer portfolios are a great lever for career advancement.`,
    question_type: `cta-link`,
    url: `https://joelhooks.com/developer-portfolio`,
    button_label: `Click to Learn More`,
  },
  level_up_goal: {
    question_heading: `OK, working on bigger projects.`,
    question_text: `Which do you think would unlock more ambitious dev projects?`,
    question_type: `multiple-choice`,
    random: true,
    other: true,
    other_label: `something else`,
    choices: [
      {
        answer: `newer_skills`,
        label: `Updating an older skill set`,
      },
      {
        answer: `full_stack`,
        label: `Becoming more "full stack"`,
      },
      {
        answer: `beyond_basics`,
        label: `Advancing beyond the basics`,
      },
    ],
    next: {
      other: `bigger_project_freeform`,
    },
  },
  bigger_project_freeform: {
    question_heading: `Ohh, "something else" you say?`,
    question_text: `How can we help you start working on bigger projects?`,
    question_type: `multi-line`,
    other: true,
    other_label: `I'd rather not say...`,
    next: {
      other: `opt_out`,
      all: `thanks`,
    },
  },
  portfolio_outreach: {
    question_heading: `Understood!`,
    question_text: `Would it be ok if one of us reached out to chat about this? 
Not a sales call, just trying to learn more about developers in your situation.`,
    question_type: `multiple-choice`,
    choices: [
      {
        answer: `ok`,
        label: `Sure, you can reach out`,
      },
      {
        answer: `no`,
        label: `No thanks`,
      },
    ],
    next: {
      no: `opt_out`,
      ok: `talk_soon`,
    },
  },
  thanks: {
    question_heading: `We appreciate you!`,
    question_text: `Understanding your situation helps us showcase the resources that 
you'll find most useful.

Thanks for letting us know!`,
    question_type: `cta-done`,
    button_label: `Click to Close`,
  },
  talk_soon: {
    question_heading: `Awesome, thanks!`,
    question_image: `https://res.cloudinary.com/dg3gyk0gu/image/upload/v1608163615/value-paths/yohann_kunders.jpg`,
    question_text: `Be on the lookout for an email from Yohann. He's super easy to get along with and curious about your goals.`,
    question_type: `cta-email`,
    button_label: `Chat soon!`,
  },
  no_contact: {
    question_heading: `We understand.`,
    question_text: `We won't ask you any more of these questions.`,
    question_type: `opt-out`,
  },
}

export default sortingHat
