export default async function FetchItems() {
  const url = 'https://fakestoreapi.com/products';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Failed to fetch items: ', err);
    return null;
  }
}
