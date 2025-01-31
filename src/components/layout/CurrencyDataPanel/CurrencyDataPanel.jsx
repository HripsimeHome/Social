import styles from "./CurrencyDataPanel.module.scss"
 
const currencyData = [
  {
    usdtData: 1,
    usdtText: "Thanks!",
  },
  {
    usdtData: 11,
    usdtText: "0.015%",
  },
  {
    usdtData: 111,
    usdtText: "0.25%",
  },
  {
    usdtData: 1111,
    usdtText: "2.55%",
  },
];

function CurrencyDataPanel() {
  return (
    <>
      {currencyData.map((panel, index) => (
        <div
          key={index}
          className={`${styles.currencyDataPanel__panelMargin} ${
          index === currencyData.length - 1 ? "greenPanel" : "whitePanel"
        }`}
      >          
        <span>{panel.usdtData} USDT</span>
        <button className="btnGreen">{panel.usdtText}</button>
      </div>
      ))}      
    </>
  )
}

export default CurrencyDataPanel