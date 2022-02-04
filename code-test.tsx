class FileContent extends React.PureComponent<FileContentProps> {
  render() {
    const {addFileLinesCallback, repoId, refId, diffs, newName, oldName, diffsNum, linesNum, fileInfo} = this.props
    const path = newName || oldName || ''
    const language = getLanguageByExtension(getExtension(path))
    const rows: any[] = []
    let iterated = 0
    let from = 0
    let to = 0
    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i]
      if (iterated === 0) {
        from = diff.bStartLine
        to = 1
      } else {
        from = iterated + 1
        to = diff.bStartLine
      }
      if (diff.bStartLine - iterated > 0) {
        rows.push(<HiddenLines key={'hidden-lines-' + i}
                               addFileLinesCallback={addFileLinesCallback}
                               repoId={repoId}
                               refId={refId}
                               path={path}
                               from={from}
                               to={to}/>)
      }
      iterated = diff.bEndLine
      const lines = diff.lines
      for (const line of lines.slice(0, i < diffsNum ? lines.length : linesNum)) {
        rows.push(<Line {...line} language={language} key={line.lineNo + '_' + line.lineNoNew}/>)
      }
    }
    const totalFileLines = fileInfo && fileInfo.linesCount && fileInfo.linesCount.after || 0
    from = iterated + 1
    to = totalFileLines
    if (iterated > 0 && totalFileLines - iterated > 0) {
      rows.push(<HiddenLines key={'hidden-lines-end'}
                             addFileLinesCallback={addFileLinesCallback}
                             repoId={repoId}
                             refId={refId}
                             path={path}
                             from={from}
                             to={to}/>)
    }
    return <table className='bbb-gp-diff-view-file__table'>
      <tbody>{rows}</tbody>
    </table>
  }
}
