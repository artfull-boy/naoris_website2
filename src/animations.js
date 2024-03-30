export const headingVariants = {
    visible: { 
        opacity: 1, 
        scale: 1 
    },
    hidden: { 
        opacity: 0, 
        scale: 0 
    },
}
// Variants for the parent container of cards
export const cardContainerVariants = {
visible: {
    opacity: 1,
    scale: 1,
},
hidden: {
    opacity: 0,
    scale: 0
}
}

// Variant for each individual card
export const cardVariants = {
visible: {
    opacity: 1,
    scale: 1,
    transition: {
        staggerChildren: 0.5 // Adjust the stagger delay as needed
    }
},
hidden: {
    opacity: 0,
    scale: 0
}
}
;