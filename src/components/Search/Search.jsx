// Styles:
import "./Search.styles.css";
// Image:
import Gold from "../../assets/gold.png";

const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="activity-description">
          <h2>LUXURY INCLUDED VACATIONS FOR A COUPLE</h2>
          <p className="advertisement">Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Our luxury beach 
            resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, 
            feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our 
            golf resorts and PADI® certified scuba diving at most resorts. If you are planning a wedding, Sandals is the leader in Caribbean destination weddings and 
            honeymoon packages.</p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img className="award-icon" src={Gold} alt="World Travel Award Winner 2021" />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="destination-search">
          <div className="promo">
            <h4 className="special-offer">GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="Grand Key West">Grand Key West</option>
                <option value="Emerald Bay">Emerald Bay</option>
                <option value="Antigua">Antigua</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Barbados">Barbados</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Grenada">Grenada</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Namibia">Namibia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Bora Bora">Bora Bora</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Japan">Japan</option>
                <option value="Maldives">Maldives</option>
                <option value="Myanmar">Myanmar</option>                
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;