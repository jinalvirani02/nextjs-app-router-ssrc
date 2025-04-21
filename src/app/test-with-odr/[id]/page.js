"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "../../page.module.css";

export default function Home() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const baseUrl = window.location.origin;
        const res = await fetch(`${baseUrl}/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div className={styles.page}><p>Loading...</p></div>;
  }

  if (!post) {
    return <div className={styles.page}><p>Post not found.</p></div>;
  }

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
