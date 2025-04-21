import styles from "../../page.module.css";

export default async function Home({params}) {
  const { id } = await params;
  const API_URL = process.env.API_URL;
  console.log(API_URL,"API_URL")
  const res = await fetch(`${API_URL}/api/posts/${id}`)
  console.log(res)
  const post = await res.json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>POST data</h3>
            <div key={`${post.userId}`}>
            <p>userId: {post.userId}</p>
              <p>id: {post.id}</p>
              <p>title: {post.title}</p>
              <p>body: {post.body}</p>
              <p>timestamp: {post.timestamp}</p>
            </div>
    </main>
    </div>
  );
}