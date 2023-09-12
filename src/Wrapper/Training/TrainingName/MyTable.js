import React from 'react'
import styles from './mytable.module.scss';

const data = [
  { name: 'Puneet Dhiman', time: '12 hours ', percentage: '94%' },
 
  { name: 'Abc', time: '3 days', percentage: '59%' },
 
  { name: 'number', time: '9 days', percentage: '47%' },
 
  
];

const MyTable = () => {
  return (
    <div className={styles.table}>
          <table>
             
            <thead className={styles.header}>
              <tr>
                <th className={styles.name}>Name</th>
                <th className={styles.completed}>Completed in</th>
                <th className={styles.score}>Avg Quiz Score</th>
              </tr>
            </thead>
            <tbody >
              {data.map((item, index) => (
                <tr key={index} className={styles.row} >
                  <td className={styles.name}>{item.name}</td>
                  <td  className={styles.completed}>{item.time}</td>
                  <td className={styles.score}>{item.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default MyTable


