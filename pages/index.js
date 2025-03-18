import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [clients, setClients] = useState([
    { id: 1, name: "Jan Kowalski", email: "jan@example.com", training: "Siłowy", payment: false },
    { id: 2, name: "Anna Nowak", email: "anna@example.com", training: "Kardio", payment: true },
  ]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/logo.png" alt="AK9 CRM Logo" width={120} height={120} />
        <h1>AK9 CRM</h1>
        <p>Zarządzaj swoimi klientami i treningami.</p>
      </header>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię i nazwisko</th>
            <th>Email</th>
            <th>Trening</th>
            <th>Płatność</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.training}</td>
              <td>{client.payment ? "Opłacono" : "Nieopłacono"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
