

export namespace TimeSlotsTypes {

    export namespace Data {

        export interface TimeSlot {
            id : number;
            time: string;
            displayTime: string;
        }

    }

    export namespace Utils {

        export type FormatTimeSlotTimes = (timeSlots: Data.TimeSlot[]) => Data.TimeSlot[];

        export type FormatTime = (timeSlot: Data.TimeSlot) => Data.TimeSlot;
    }

    export namespace UI {
        export interface ITimeSlots {
            consultantType: string
            selectedTimeSlot: string;
            setSelected: (timeSlot: string) => () => void;
        }
        
    }
}