import React from 'react'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faGasPump, faLeaf, faPlug } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'




const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo(0, 0)
    }

  return (
    <div className={styles.container}>
        <div className={styles.boxContainer1}>
            <h2 className={styles.mainTitle}>More</h2>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h5 className={styles.title}>About Us</h5>
                    <h6 className={styles.link}>Mercedes-Benz Group AG</h6>
                    <h6 className={styles.link}>Business Units</h6>
                    <h6 className={styles.link}>Investors</h6>
                    <h6 className={styles.link}>Press</h6>
                </div>
                <div className={styles.box}>
                    <h5 className={styles.title}>Careers</h5>
                    <h6 className={styles.link}>Job Search</h6>
                    <h6 className={styles.link}>Professionals</h6>
                    <h6 className={styles.link}>Graduates</h6>
                    <h6 className={styles.link}>Students</h6>
                    <h6 className={styles.link}>Talent Programs</h6>
                </div>
                <div className={styles.box}>
                    <h5 className={styles.title}>Knowledge Center</h5>
                    <h6 className={styles.link}>Consumption & Emissions</h6>
                    <h6 className={styles.link}>Mercedes-Benz Energy Storage</h6>
                    <h6 className={styles.link}>Real Driving Emissions</h6>
                    <h6 className={styles.link}>Semiconductor Availability</h6>
                    <h6 className={styles.link}>UN 38.3 Test</h6>
                </div>
                <div className={styles.box}>
                    <h5 className={styles.title}>Business Services</h5>
                    <h6 className={styles.link}>Fleet Sales</h6>
                    <h6 className={styles.link}>International Diplomatic Sales</h6>
                    <h6 className={styles.link}>Training for Authorized Dealers</h6>
                </div>
            </div>
        </div>

        <div className={styles.boxContainer2}>
            <div className={styles.box}>
                <p className={styles.title}> <FontAwesomeIcon icon={faPlug} className={styles.icon}/> Stromverbrauch kombiniert² </p>
                <p className={styles.title}> <FontAwesomeIcon icon={faGasPump} className={styles.icon}/> Kraftstoffverbrauch kombiniert¹² </p>
                <p className={styles.title}> <FontAwesomeIcon icon={faLeaf} className={styles.icon}/>  CO₂-Emissionen kombiniert¹ </p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>1</p>
                <p className={styles.description}>Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>2</p>
                <p className={styles.description}>Die angegebenen Werte sind die „gemessenen NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 2 Durchführungsverordnung (EU) 2017/1153, die im Einklang mit Anhang XII der Verordnung (EG) Nr. 692/2008 ermittelt wurden. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Aufgrund gesetzlicher Änderungen der maßgeblichen Prüfverfahren können in der für die Fahrzeugzulassung und ggf. Kfz-Steuer maßgeblichen Übereinstimmungsbescheinigung des Fahrzeugs höhere Werte eingetragen sein. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch und die CO₂-Emissionen neuer Personenkraftwagen“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>3</p>
                <p className={styles.description}>Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um „WLTP-CO₂-Werte“ i. S. v. Art. 2 Nr. 3 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>4</p>
                <p className={styles.description}>Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>5</p>
                <p className={styles.description}>Angaben zum Kraftstoffverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>6</p>
                <p className={styles.description}>Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>7</p>
                <p className={styles.description}>Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr. 101 ermittelt. Die EG-Typgenehmigung und eine Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>8</p>
                <p className={styles.description}>Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
            </div>
            <div className={styles.box}>
                <p className={styles.number}>9</p>
                <p className={styles.description}>Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle” entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
            </div>
        </div>


        <div className={styles.boxContainer3}>
            <div className={styles.box1}>
                <div className={styles.smallBox}>
                    <h6 className={styles.link}>Provider</h6>
                    <h6 className={styles.link}>Legal Notice</h6>
                    <h6 className={styles.link}>Cookies</h6>
                    <h6 className={styles.link}>Privacy</h6>
                    <h6 className={styles.link}>Contact</h6>
                    <h6 className={styles.link}>Don't Sell My Personal Information (CCPA)</h6>
                </div>
                <div className={styles.smallBox}>
                    <h6 className={styles.deutch}>Deutsch</h6>
                    <h6 className={styles.l}>|</h6>
                    <h6 className={styles.english}>English</h6>
                </div>
            </div>

            <div className={styles.box2}>
                <img src={logo} alt="logo" className={styles.logo} onClick={scrollTop}/>
                <h2 className={styles.title} onClick={scrollTop}>Mercedes-Benz</h2>
            </div>

            <div className={styles.box3}>
                <FontAwesomeIcon icon={faChevronUp} className={styles.topIcon} onClick={scrollTop}/>
                <h6 className={styles.top} onClick={scrollTop}>Top</h6>
            </div>
        </div>

        <div className={styles.boxContainer4}>
            <h6 className={styles.mercedesCredit}>This website is a clone-project of <Link target='_blank' to='https://www.mercedes-benz.com/en/' className={styles.mercedesLink}> Mercedes-Benz</Link></h6>
            <h6 className={styles.salamaCredit}>©2023 developed by <Link target='_blank' to='https://salama-portfolio.web.app/' className={styles.salamaLink}>Mahmoud Salama</Link></h6>
        </div>

    </div>
  )
}

export default Footer