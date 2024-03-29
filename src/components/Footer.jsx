import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="h-20 bg-slate-800 items-center text-center">
        <div className="pt-3 text-slate-50">
        <p>&copy; {currentYear}</p>
        <p>Built with &#x1F496; by <Link to={'https://www.linkedin.com/in/kudakwashe-mukucha-998b3b178/'} target={'_blank'}>kuda mukucha</Link></p>
        </div>
    </div>
  )
}
