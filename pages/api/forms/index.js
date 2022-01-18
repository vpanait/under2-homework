// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Hubspot = require('hubspot')
const hubspot = new Hubspot({
    apiKey: 'HSKEY',
    checkLimit: false
  })


function parseFormField(field) {
  return {
    name: field.name,
    label: field.label,
    placeholder: field.placeholder,
    fieldType: field.fieldType,
    description: field.description,
    groupName: field.groupName,
    required: field.required,
    enabled: field.enabled,
    hidden: field.hidden,
    labelHidden: field.labelHidden,
    propertyObjectType: field.propertyObjectType,
    objectTypeId: field.objectTypeId
  }
}

function parseFormData(form) {
  const allFields = form.formFieldGroups.reduce((arr, group) => {    
    const parsedFields = group.fields.map(parseFormField)
    return [...arr, ...parsedFields]
  }, [])

  const data = {
    guid: form.guid,  
    portalId: form.portalId,
    name: form.name,
    method: form.method,
    submitText: form.submitText,
    submitMessage: form.inlineMessage,
    fields: allFields
  }

  return data
}


export default async function handler(req, res) {
  if (req.method === 'GET') {
    const resolvedHubSpotForms = await hubspot.forms.get()  
    const forms = resolvedHubSpotForms.map(parseFormData)
    return res.status(200).json(forms)
  }
  
  return res.status(405).send({ error: `This route does not accept ${req.method} requests`})
}
