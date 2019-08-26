export namespace BookButtonTypes {

    export namespace Data {

        export interface IBookingData {
            readonly userId: number;
            readonly time: string;
            readonly notes?: string;
            readonly consultantType: string;
            readonly appointmentType: string[]
        }
    }

    export namespace Utils {

        export type GetBookingData = (userId: number, time: string, notes: string, consultantType: string, appointmentType: string[]) => Data.IBookingData;

        export type isBookingAvailable = (bookingData: Data.IBookingData) => boolean;

        export type GetUserId = (state: any) => number;

        export type GetDateTime = (state: any) => string;

        export type GetNotes = (state: any) => string;

        export type GetConsultantType = (state: any) => string;

        export type GetAppointmentType = (state: any) => string[];
    }

    export namespace UI {

        export interface IBookButton{
            isAvailable: boolean;
            bookingData: Data.IBookingData;
            clickHandler: (bookAppointment: Function, bookingData: Data.IBookingData) => () => void;
        }
    }
}