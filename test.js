import 'prismjs/components/prism-typescript.min'
 
import 'prismjs/themes/prism.css'
 
export {highlightAll, highlightElement}

class AllRepos_ extends React.PureComponent<AllReposProps & AllReposFuns> {
    render() {
      const {isAdmin, isNewUI, allReposShown, isLoadingPage, isLoadingRepos, error, onChangeHasUserPat} = this.props
      return (
        <Page>
            {a ? <p>test</p> : null}
        </Page>
      )
    }
  }
  