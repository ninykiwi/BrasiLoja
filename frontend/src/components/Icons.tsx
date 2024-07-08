import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export interface IconsProps {
  className?: string
  src: 'addCart' | 'cart' | 'chat' | 'close' | 'etapas' | 'frete' | 'heart' | 'home' | 'leftArrow' | 'rightArrow' | 'search' | 'setaCarrossel' | 'share' | 'toggleMenu' | 'user'
  iconStyle?: string
  width: number
  href?: string
  onClick?: () => void
}
export const Icons = ({
  className,
  src,
  iconStyle,
  width,
  href,
  onClick,
}: IconsProps) => {

  if (href) {
    return (
      <Link className={className} onClick={onClick} href={href}>

        <Image className={iconStyle} src={src} alt={`icone de ${src}`} width={width} height={width} />

      </Link>
    )
  } else {
    return (
      <div className={className} onClick={onClick}>

        <Image className={iconStyle} src={src} alt={`icone de ${src}`} width={width} height={width} />

      </div>
    )
  }
}
