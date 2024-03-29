import { Reservation } from "../entities";
import { Repository, EntityRepository } from "typeorm";
import { Service } from "typedi";

@Service()
@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {
  async deleteAllReservations(): Promise<void> {
    await this.clear();
  }

  async deleteReservation(id: string): Promise<void> {
    await this.delete({ id });
  }

  async createReservation(reservation: Reservation): Promise<Reservation> {
    return await this.create(reservation).save();
  }
}
