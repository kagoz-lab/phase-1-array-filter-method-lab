// 1. findMatching - returns all drivers that match the passed in name (case insensitive)
/*function findMatching(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // 2. fuzzyMatch - returns a driver if beginning provided letters match (case insensitive)
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // 3. matchName - accesses the data structure to check if name matches exactly (case sensitive)
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }*/
    function findMatching(source, sought) {
        return source.filter(
          (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
        );
      }
      function fuzzyMatch(source, testString) {
        return source.filter(
          (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
        );
      }
      function matchName(source, soughtName) {
        return source.filter((record) => record.name === soughtName);
      }
  
  
