import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile( ) {
    const { level } = useContext(ChallengesContext)


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheuspaiva1.png" alt="Matheus"/>
            
            <div>
                <strong>Matheus Paiva</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        
        </div>
        
    );
}