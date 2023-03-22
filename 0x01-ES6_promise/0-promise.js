export default function getResponseFromAPI() {
  return (new Promise((resolve, reject) => {
    try {
      resolve("")
    } catch (error) {
      reject(error);
    }
  }));
}
