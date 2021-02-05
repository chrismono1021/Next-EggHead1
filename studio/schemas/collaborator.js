import {MdGroup as icon} from 'react-icons/md'
import React from 'react'

export default {
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'department',
      title: 'Department',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{type: 'person'}],
    },

    {
      name: 'externalId',
      title: 'External ID (egghead contact id)',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      name: 'person.name',
      department: 'department',
      media: 'person.image.url',
    },
    prepare(selection) {
      const {name, title, department, media} = selection
      return {
        title,
        subtitle: `${name} • ${department}`,
        media: <img src={media} alt={`${name}`} />,
      }
    },
  },
}
