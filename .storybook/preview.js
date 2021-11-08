import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
          width: '600px',
          height: '963px'
        }
      },
      kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
          width: '533px',
          height: '801px'
        }
      }
    }
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ]
  }
}

export const decorators = [
  (story, context) => ({
    template: `
      <div style="backgroundColor: gray; padding: 10px">
        <story />
      </div>
    `
  }),
  (story, context) => ({
    template: `
      <div>
        <h1>${context.kind}</h1>
        <h2>args</h2>
        <p>${JSON.stringify(context.args)}</p>
        <h2>Reuslt</h2>
        <story />
      </div>
    `
  })
]