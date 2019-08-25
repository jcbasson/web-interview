

export namespace TimeSlots {

    export namespace Data {

        export interface TimeSlot {
            id : number;
            time: string;
        }

    }

    export namespace Utils {

        export type FormatTimeSlotTimes = (timeSlots: Data.TimeSlot[]) => Data.TimeSlot[];

        export type FormatTime = (timeSlot: Data.TimeSlot) => Data.TimeSlot;
    }
}