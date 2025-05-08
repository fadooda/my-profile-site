import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import CertificateCard from '../components/CertificateCard';
import reactjs_frontend_dev_cert from '../images/frontend_developer_react_certificate-page.jpg'; 
import software_engineer_cert from '../images/software_engineer_certificate-page.jpg';
import js_intermediate_cert from '../images/javascript_intermediate_certificate-page.jpg';
import sql_advanced_cert from '../images/sql_advanced_certificate-page.jpg';
import nodejs_intermediate_cert from '../images/nodejs_intermediate_certificate-page.jpg';
import problem_solving_intermediate_cert from '../images/problem_solving_intermediate_certificate-page.jpg';
import sql_intermediate_cert from '../images/sql_intermediate_certificate-page.jpg';
import software_engineer_intern_cert from '../images/software_engineer_intern_certificate-page.jpg';
import css_basic_cert from '../images/css_certificate-page.jpg';
import reactjs_basic_cert from '../images/react_basic_certificate-page.jpg';
import java_basic_cert from '../images/java_basic_certificate-page.jpg';
import PageFooter from './pageFooter'

class Certificate extends Component {
    render() {
      return (
        <div>
          <Grid>
            <Cell col={12}>
              <div className="projects-grid">
                <CertificateCard
                  title="Frontend Developer (React) Certificate – HackerRank 2025"
                  image={reactjs_frontend_dev_cert}
                  description="It covers topics like React, CSS, and JavaScript."
                  pdfLink="/frontend_developer_react certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/6dc3d6ff3cf1"
                />
                <CertificateCard
                  title="Software Engineer Certificate – HackerRank 2025"
                  image={software_engineer_cert}
                  description="It covers topics like Problem solving, SQL, and REST API."
                  pdfLink="/software_engineer certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/97f052bff37e"
                />

                <CertificateCard
                  title="JavaScript (Intermediate) Certificate – HackerRank 2025"
                  image={js_intermediate_cert}
                  description="It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others."
                  pdfLink="/javascript_intermediate certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/522aa5c97a52"
                />

                <CertificateCard
                  title="SQL (Advanced) Certificate – HackerRank 2025"
                  image={sql_advanced_cert}
                  description="It covers topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL."
                  pdfLink="/sql_advanced certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/8e66a5b919b5"
                />

                <CertificateCard
                  title="Node.js (Intermediate) Certificate – HackerRank 2021"
                  image={nodejs_intermediate_cert}
                  description="Understand the concepts behind an Event-Driven Architecture and Concurrency."
                  pdfLink="/nodejs_intermediate certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/4977d4dd2606"
                />

                <CertificateCard
                  title="Problem Solving (Intermediate) Certificate – HackerRank 2020"
                  image={problem_solving_intermediate_cert}
                  description="It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions)."
                  pdfLink="/problem_solving_intermediate certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/41ef760fe12c"
                />

                <CertificateCard
                  title="SQL (Intermediate) Certificate – HackerRank 2025"
                  image={sql_intermediate_cert}
                  description="It includes complex joins, unions, and sub-queries."
                  pdfLink="/sql_intermediate certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/2f5d23ac2df5"
                />

                <CertificateCard
                  title="Software Engineer Intern Certificate – HackerRank 2025"
                  image={software_engineer_intern_cert}
                  description="It covers topics like Problem solving and SQL."
                  pdfLink="/software_engineer_intern certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/39df41ec3b3e"
                />
                
                <CertificateCard
                  title="CSS (Basic) Certificate – HackerRank 2025"
                  image={css_basic_cert}
                  description="It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others."
                  pdfLink="/css certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/94521d11bedb"
                />

                <CertificateCard
                  title="React (Basic) Certificate – HackerRank 2021"
                  image={reactjs_basic_cert}
                  description="React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation."
                  pdfLink="/react_basic certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/70a61400d484"
                />

              <CertificateCard
                  title="Java (Basic) Certificate – HackerRank 2020"
                  image={java_basic_cert}
                  description="It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8."
                  pdfLink="/java_basic certificate.pdf"
                  linkedCert="https://www.hackerrank.com/certificates/6705d0d90f58"
                />
              </div>
            </Cell>
          </Grid>
          <PageFooter isGrid={false} />
        </div>
      );
    }
  }
  
export default Certificate;

