export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 1.0 : isMobile ? 1.2 : 1.3, // Adjusted values
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -3.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [11, -5, 0] : isTablet ? [12, -5, 0] : [13, -5.5, 0],
        reactLogoPosition: isSmall ? [5, 4, 0] : isMobile ? [8, 5, 0] : isTablet ? [9, 5, 0] : [12, 5, 0],
        ringPosition: isSmall ? [-10, 7, 0] : isMobile ? [-16, 10, 0] : isTablet ? [-16, 11, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-7, -12.5, -10] : isMobile ? [-15, -9, -10] : isTablet ? [-13, -9, -10] : [-13, -13, -10],
    };
};