/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type userAddress = {
    /**
     * Type of object is always `userAddress`.
     */
    object: string;
    /**
     * Unique identifier for the given address.
     */
    id: string;
    /**
     * The city/municipality of the given street address.
     */
    city: string;
    /**
     * The ISO 3166-1 alpha-2 country code for the given address.
     */
    country: string;
    /**
     * The first line of the given street address, e.g. street and house number.
     */
    line1: string;
    /**
     * The second line of the given street address, e.g. Apartment number.
     */
    line2: string | null;
    /**
     * The postal code of the given street address.
     */
    postalCode: string | null;
    /**
     * The state/province/region of the given street address.
     */
    state: string | null;
    /**
     * Unique identifier for the given address user.
     */
    user: string;
    /**
     * The time the address was created.
     */
    createdAt: string;
};

