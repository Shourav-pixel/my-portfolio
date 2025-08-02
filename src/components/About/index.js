import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {
  faLaravel,
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a dedicated and detail-oriented <strong>Software QA Engineer</strong> with hands-on
            experience in both <strong>manual and automation testing</strong>. I recently completed an
            internship at <strong>a1qa</strong>, where I contributed to real-world testing projects
            and gained practical knowledge of quality assurance processes.
          </p>
          <p>
            My skill set includes test case design, bug tracking, and functional testing, as well as
            writing and maintaining automated tests using <strong>Playwright</strong> and managing
            workflows with <strong>JIRA</strong>. I am comfortable working in Agile environments and
            enjoy collaborating with developers and stakeholders to ensure product quality.
          </p>
          <p>
            I am passionate about continuous learning, improving test coverage, and adopting the best
            testing practices. I am currently seeking a full-time opportunity where I can apply my
            testing skills and grow further as a QA professional.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLaravel} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
