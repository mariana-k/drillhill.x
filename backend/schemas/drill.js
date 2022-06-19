export default {
    name: 'drill',
    title: 'Drill', 
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [{ type: 'question' }]
        }
    ]
};