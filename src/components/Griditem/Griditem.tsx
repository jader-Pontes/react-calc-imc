//helpers
import { level } from '../../helpers/imc';

//style
import styles from './Griditem.module.css';

//img
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


type Props = {
    item: level
};


export const Grinditem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt='up' width={30} />}
                {item.icon === 'down' && <img src={downImage} alt='down' width={30} />}

                {/* <img src={item.icon === 'up' ? upImage : downImage} alt='' width={30} /> */}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} Kg/m²</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong>e <strong>{item.imc[1]}</strong>

                </>
            </div>
        </div>
    )
}
