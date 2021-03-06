import PropTypes from 'prop-types'
import SiteHead from '@/components/SiteHead'
import BackButton from '@/components/BackButton'
import config from '@/lib/config'

const Layout = ({children}) => (
  <div className="max-w-xs pt-12 m-auto text-center">
    <SiteHead
      title={`Alphabet - ${config.siteName}`}
      description="The alphabet in flashcard form."
    />
    <BackButton />
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
