export namespace BookButtonTypes {

    export namespace Data {

        export interface IBookingData {
            readonly userId: number;
            readonly dateTime: string;
            readonly notes?: string;
            readonly type: string;
        }
    }

    export namespace Utils {

        export type GetBookingData = (userId: number, dateTime: string, notes: string, type: string) => Data.IBookingData;

        export type isBookingAvailable = (bookingData: Data.IBookingData) => boolean;

        export type GetUserId = (state: any) => number;

        export type GetDateTime = (state: any) => string;

        export type GetNotes = (state: any) => string;

        export type GetType = (state: any) => string;
    }

    export namespace UI {

        export interface IBookButton{
            isAvailable: boolean;
            bookingData: Data.IBookingData;
            clickHandler: (bookingData: Data.IBookingData) => () => void;
        }
    }
}