const axios = require('axios');
export async function GET(req, { params }, res) {
  const { id } = await params;
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  data.timestamp = new Date().toISOString();
  return Response.json(data);
}