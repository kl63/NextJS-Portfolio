import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Typewriter from '@/components/Typewriter'
import Reveal from '@/components/Reveal'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Newsletter from '@/components/Newsletter'

const Layout = ({ privacy_info = {}, privacy_header, privacy_date }) => {


  return (
    <div className="mx-auto">
      <div className="basis-2/3">
        {privacy_header && (
          <div className="p-6 md:p-12">
            <h3 className="mb-2">{privacy_header.title}</h3>
            {privacy_header.list && (
              <h3 className="inline">
                <Typewriter lines={privacy_header.list} lineClassName="text-gradient-500" />
              </h3>
            )}
          </div>
        )}

        <Reveal animation="fade-in slide-in-top" className="prose p-6 dark:prose-invert md:p-12">
          <ContentRenderer source={privacy_info} />
      
        </Reveal>
      </div>

     
    </div>
  )
}

export default Layout
