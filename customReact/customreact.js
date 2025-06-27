
function customRender(reactElement, container) {
   // Create a DOM element based on the type of the reactElement
   // const domElement = document.createElement(reactElement.type)

   // domElement.innertHTML = reactElement.children
   // domElement.setAttribute('href', reactElement.props.href)
   // domElement.setAttribute('target', reactElement.props.target)

   // // Append the created DOM element to the container
   // container.appendChild(domElement)

   // version 2 
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
      if (prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop])
   }

   container.appendChild(domElement)
}
const reactElement = {
   type: 'a',
   props: {
      href: 'https://react.dev',
      target: '_blank',
   },
   children: 'Click me to learn React'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)