import headerStyles from '../styles/Header.module.css'

const Header = ({children}) => {
  const x = 2
  return (
    <div>
      <h1 className={headerStyles.title}><span>Mezidia</span></h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red': 'blue'};
          }
        `}
      </style>
    </div>
  )
}

export default Header
