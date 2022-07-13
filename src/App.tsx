import React, { useState } from 'react';

//style
import styles from './App.module.css';

//img
import poweredImage from "./assets/powered.png"
import leftArrowImage from './assets/leftarrow.png'

//helpers
import { levels, calculateImc, level } from './helpers/imc'

//components
import { Grinditem } from './components/Griditem'


function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {

      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos")
    }
  }
  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea,parâmetro adotada pela Organização Mundial de Saúde para calcular o peso idela de cada pessoa.</p>

          <input type="number"
            placeholder='Digite a sua altura. Ex: 1.5(em métros)'
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input type="number"
            placeholder='Digite o seu peso. Ex: 75.5(em Kg)'
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <Grinditem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="seta" width={25} />
              </div>
              <Grinditem item={toShow} />
            </div>
          }
        </div>
      </div>

    </div>
  );
}

export default App;
