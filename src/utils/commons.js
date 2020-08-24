import {
  AllHtmlEntities
} from "html-entities"

export function decode (string) {
  return string ? new AllHtmlEntities().decode(string.replace(/<(?:.|\n)*?>/gm, '')) : "We are DOG LOVERS"
}

export function getParams (asPath) {
  const searchParams = new URLSearchParams(asPath.split(/\?/)[1])
  const params = {}

  for (const [key, value] of searchParams) {
    params[key] = value
  }

  return params
}

export function setScript (source) {
  const exScript = document.querySelector(`script[src="${source}"]`)

  if (exScript) {
  	exScript.remove()
  }

  const newScript = document.createElement("script")
  newScript.src = source; newScript.async = false
  document.body.appendChild(newScript)
}

export function setScripts (sources) {
  sources.forEach(function (source) {
	  setScript(source)
	})
}