
import './App.css';

import { useState, useEffect } from 'react';
import { filterArr ,data } from './data';

function App() {

  const [filters, setFilters] = useState(filterArr);

  const handleInputChange = (index, value) => {
    setFilters(prevFilters => {
      const updatedFilters = prevFilters.map(item => {
        if (item.name === index) {
          return { ...item, value: value };
        }
        return item;
      });
      return updatedFilters;
    });
  };

  const applyFilter = () => {
    const filteredData = data.data.filter(item => {
      return filters.every(filter => {
        if (!filter.value) return true;
        else if (
          item[filter.name] &&
          item[filter.name].toString().toLowerCase().includes(filter.value.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    });
    return filteredData;
  };

  useEffect(() => {

    console.log(applyFilter())


  }, [filters]);

  return (
    <div className="App">
      <ul>
      {filters.map(filter => (
        <li key={filter.id} ><input type={filter.type} placeholder={filter.placholder} className={filter.className} onChange={e => handleInputChange( filter.name , e.target.value)} /> </li>
      ))}
      </ul>

    </div>
  );
}

export default App;
