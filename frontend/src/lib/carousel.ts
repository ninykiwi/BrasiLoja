

export const calculateItemsToShow = (containerWidth: any) => {

  const itemWidth = 235
  const spacing = 78
  const availableWidth = containerWidth - spacing

  let maxItemsDesktop = Math.floor(availableWidth / (itemWidth + spacing))
  let maxItemsTablet = Math.floor(availableWidth / (itemWidth + spacing))
  let maxItemsMobile = Math.floor(availableWidth / itemWidth)

  maxItemsDesktop = Math.max(maxItemsDesktop, 1)
  maxItemsTablet = Math.max(maxItemsTablet, 1)
  maxItemsMobile = Math.max(maxItemsMobile, 1)

  return {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: maxItemsDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: maxItemsTablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: maxItemsMobile,
    },
  }
}

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}