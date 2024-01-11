import { useEffect, useState } from 'react';
import Row from './components/Row';

function App() {

  let [rowArr, setRowArr] = useState([{
    number: 0,
    operation: "+",
    disabled: false,
    id: 0
  }]);


  const deleteRow = (id) => {
    const updatedRows = rowArr.filter((row) => row.id !== id);
    setRowArr(updatedRows);
  };

  const updateRowOperation = (id, newOperator) => {
    console.log(id, newOperator);
    const updatedRows = rowArr.map(
      (row) => row.id === id ? { ...row, operation: newOperator } : row
    );
    setRowArr(updatedRows);
  };

  const updateRowNumber = (id, number) => {
      if(!number){
        number = 0; //In case number is NaN, it assignes 0
      }
      const updatedRows = rowArr.map(
        (row) => row.id === id ? { ...row, number: parseInt(number, 10) } : row
      );
      setRowArr(updatedRows);
  }

  const disableRow = (id) => {
    const updatedRows = rowArr.map(
      (row) => row.id === id ? { ...row, disabled: !row.disabled } : row
    );
    setRowArr(updatedRows);
  };

  const addingRow = () => {
    const newRow = { id: 0, number: 0, operation: '+', disabled: false };
    setRowArr([...rowArr, newRow]);
  }

  const calculateResult = () => {
    return rowArr.reduce(
      (result, row) => {
        if (!row.disabled) {
          return row.operation === '+' ? result + row.number : result - row.number;
        }
        console.log(result);
        return result;
      }, 0);
  };

  return (
    <div className="container">
      <button className="adder btn btn-outline-primary" type="button" onClick={addingRow}>Add Row</button>
      {
                rowArr.map(
                  (row, id) => {
                    row.id = id;
                    return <Row key={id} row={row} updateNum={updateRowNumber} updateOp={updateRowOperation} deleteRow={deleteRow} disableRow={disableRow}/>
                })} 
      <h2>{calculateResult()}</h2>
    </div>
  );
}

export default App;