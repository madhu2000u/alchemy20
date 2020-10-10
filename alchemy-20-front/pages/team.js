import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage";
import styles from "../styles/Team.module.css";
import TeamPerson from "../components/Team Person/TeamPerson";

export default function Team() {
  return (
    <main className={styles.main}>
      <Subpage />
      <div className={styles.heading}>
        <p>Team</p>
      </div>
      <div className={styles.people}>
        <div className={styles.chairman}>
          <TeamPerson
            isHead={true}
            img="https://imgur.com/36vQ3IK.jpg"
            alt="Image of Surya"
            name="Surya BJ"
            title="CHAIRMAN"
            phno="+91 99945 41821"
          />
        </div>
        <div className={styles.other_heads}>
          <TeamPerson
            isHead={true}
            img="https://imgur.com/2qCRl2e.jpg"
            alt="Image of Kande"
            name="Ashish Kande"
            title={"OVERALL\nCOORDINATOR"}
            phno="+91 94418 83896"
          />
          <TeamPerson
            isHead={true}
            img="https://imgur.com/MAH9Kiw.jpg"
            alt="Image of Atti"
            name="Atti Srinivas"
            title="VICE CHAIRMAN"
          />
          <TeamPerson
            isHead={true}
            img="https://imgur.com/dU13byd.jpg"
            alt="Image of Maank"
            name="Mayank"
            title="TREASURER"
            phno="+91 87091 67370"
          />
        </div>
        <div className={styles.content_and_publicity}>
          <div className={styles.team_container}>
            <p>CONTENT</p>
            <div className={styles.team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/jQTil68.jpg"
                alt="Image of Viswa"
                name="Viswa"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/uJ20tj3.jpg"
                alt="Image of Saatvi"
                name="Saatvi"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/ZEPrfme.jpg"
                alt="Image of Mithran"
                name="Mithran"
              />
            </div>
          </div>
          <div className={styles.team_container}>
            <p>PUBLICITY</p>
            <div className={styles.team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/8aQzsww.jpg"
                alt="Image of Ansinath"
                name="Ansinath"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/PTPc4D2.jpg"
                alt="Image of Harie"
                name="Harie"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/tI7SeXZ.jpg"
                alt="Image of Moneesh"
                name="Moneesh"
              />
            </div>
          </div>
        </div>
        <div className={styles.team_container}>
          <p>ORGANIZING COMMITTEE</p>
          <div className={styles.oc_team}>
            <TeamPerson
              isHead={false}
              img="https://imgur.com/5Mu8TRr.jpg"
              alt="Image of Shashank"
              name="Shashank"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/aOADvaP.jpg"
              alt="Image of Dinakar"
              name="Dinakar"
            />
          </div>
        </div>
        <div className={styles.web_pr_des}>
          <div className={styles.team_container}>
            <p>WEB OPS</p>
            <div className={styles.team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/D6jd44h.jpg"
                alt="Image of Madhu"
                name="Madhu"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/fkhdFhX.jpg"
                alt="Image of Shambu"
                name="Shambu"
              />
            </div>
          </div>
          <div className={styles.team_container}>
            <p>PR AND HOSPITALITY</p>
            <div className={styles.team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/piKtlDq.jpg"
                alt="Image of Manohar"
                name="Manohar"
              />
            </div>
          </div>
          <div className={styles.team_container}>
            <p>DESIGN</p>
            <div className={styles.team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/IGNsRI7.jpg"
                alt="Image of Naveen"
                name="Naveen"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/96zLe4t.jpg"
                alt="Image of Rasika"
                name="Rasika"
              />
            </div>
          </div>
        </div>
        <div className={styles.market_gl}>
          <div className={styles.team_container}>
            <p>MARKETING</p>
            <div className={styles.mar_gl_team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/XuQVuJJ.jpg"
                alt="Image of Nimrisha"
                name="Nimrisha"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/Gry5psh.jpg"
                alt="Image of Arindham"
                name="Arindham"
              />
            </div>
          </div>
          <div className={styles.team_container}>
            <p>GUEST LECTURES</p>
            <div className={styles.mar_gl_team}>
              <TeamPerson
                isHead={false}
                img="https://imgur.com/Th0LV1s.jpg"
                alt="Image of Nila"
                name="Nila"
              />
              <TeamPerson
                isHead={false}
                img="https://imgur.com/QlMfCK9.jpg"
                alt="Image of Nishanth"
                name="Nishanth"
              />
            </div>
          </div>
        </div>
        <div className={styles.team_container}>
          <p>EVENTS</p>
          <div className={styles.team}>
            <TeamPerson
              isHead={false}
              img="https://imgur.com/xSs1EY1.jpg"
              alt="Image of Harshit"
              name="Harshit"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/qrnz0Mg.jpg"
              alt="Image of Govind"
              name="Govind"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/7tUu4az.jpg"
              alt="Image of Anuj"
              name="Anuj"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/BEKWECT.jpg"
              alt="Image of Dharshini"
              name="Dharshini"
            />
          </div>
        </div>
        <div className={styles.team_container}>
          <p>WORKSHOPS</p>
          <div className={styles.team}>
            <TeamPerson
              isHead={false}
              img="https://imgur.com/KQtTPQa.jpg"
              alt="Image of Devender"
              name="Devender"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/gjR7tDF.jpg"
              alt="Image of Sriram"
              name="Sriram"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/07KfjSn.jpg"
              alt="Image of Afnas (PG)"
              name="Afnas (PG)"
            />
            <TeamPerson
              isHead={false}
              img="https://imgur.com/oywxgWx.jpg"
              alt="Image of Franklin (PG)"
              name="Franklin (PG)"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

Team.Layout = Common;
