The project is built using Reactjs(create-react-app). There are 2 main components which are present in the **src** folder.

1. **App.js** : In this component, the data is retrieved from the json file. **useState** and **useEffect** have been used appropriately to retrieve and dsiplay the data.

> - Before the data is being displayed, **sort()** (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function along with **map()** has been used to sort the data based on the engagement. Concept of **rest parameters** (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) has also been used.

> - This data is then passed to the TableData component as **props**.

2. **TableData.js** : This component is mainly used to display the sorted table data which is received from **App.js** as **props**.

The table component of Material UI (https://material-ui.com/components/tables/) library has been used to render the table.

Also, **earned.json** file is the input file from which the data is being read and is present in **src** folder.

### Running the code

Make sure that you are in the root level of the project to perform the below steps.

1. Install the components using `npm install`.

2. To run the code, run `npm start`. A new tab will open on the browser.
