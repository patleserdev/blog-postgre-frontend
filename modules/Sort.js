
function SortBy(datas,filter)
{
// sort by name
datas.sort((a, b) => {
    const nameA = a.filter; 
    const nameB = b.filter; 

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  return datas
}

module.exports = { SortBy }

