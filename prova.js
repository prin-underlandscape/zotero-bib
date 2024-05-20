const uid='14308190'
const collId='J22KD6XJ'
const apiKey='nQzLttqa7HtBpPrTmECXG8EN'

const userAction = async () => {
  console.log(queryString);
  const response = await fetch(
    `https://api.zotero.org/users/${uid}/collections/${collId}/items?format=json&${queryString}`, {
    headers: {
	  'Zotero-API-Key': apiKey
	}
  });
  const bibList = await response.json(); //extract JSON from the http response
  var titleList = '<ul>';
  bibList.forEach(bib => {
	  titleList += '<li>' + bib.data.title
	  if ( bib.data.url ) {
		titleList += ' <a href="' + bib.data.url + '">(link)</a>'
	  }
	})
  titleList = titleList + '</ul>'
  document.getElementById('demo').innerHTML = titleList;
}

const queryString = window.location.search;
userAction()
