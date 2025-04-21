import styles from "../../page.module.css";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
    return [1,2,3,4,5].map((id) => ({
      id: String(id),
    }))
  }

export default async function Home({params}) {
  const { id } = await params;
  const API_URL = "http://localhost:3000";
  const res = await fetch(`${API_URL}/api/posts/${id}`, {
    next: { revalidate: 10 }, // ✅ ISR config
  })
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