import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  const displayData = () => {
    // Solution 1: Optional chaining
    console.log(data?.someProperty);

    // Solution 2: Nullish coalescing
    const propertyValue = data?.someProperty ?? 'Default Value';
    console.log(propertyValue);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Button title="Display Data" onPress={displayData} />
      {/* Conditionally render data */}
      {data && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
}

export default MyComponent;