import React from 'react';
import styles from './profile.css';
import { history } from 'umi';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page profile</h1>
      <button onClick={() => history.goBack()}>
        go back to index
      </button>
    </div>
  );
}
