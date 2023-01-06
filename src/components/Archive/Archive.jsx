import React from 'react'
import './archive.scss'
import { Helmet } from "react-helmet";
import { ReactComponent as IconFile } from '../../media/icons/file.svg';
import { archiveContent } from './Archive-content';



export default function Archive() {
  window.scrollTo(0, 0);
  return (
    <div className="archive">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Архив | РМ</title>
      </Helmet>
      <div className="content__container">
      {archiveContent.sections.map((section, sectionIndex)=>{
        console.log(section)
        return(
          <div className="archive__section" key={`section-${sectionIndex}`}>
            <div className="section__title">{section.name}</div>
            <div className="section__docs">
              {section.files.map((file, fileIndex)=>{
                return(
                  <div 
                    className="section__document" 
                    key={`file-${sectionIndex}-${fileIndex}`}
                    id={file.nextSection ? file.nextSection : `id-${sectionIndex}-${fileIndex}`}
                  >
                    <a 
                      href={`../files/archive/${section.url}/${file.url}`}
                      target="_blank"
                    >
                      <IconFile />{file.name}
                    </a>
                  </div>
                )
              })}
            </div>
        </div>
        )
      })
      }
      </div>
    </div>

  )
}
