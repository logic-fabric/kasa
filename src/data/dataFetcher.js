import {
  PropertyAdvertisement,
  PropertyAdvertisementsList,
} from "./propertyAdvertisement";

export class DataFetcher {
  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  async fetchSource() {
    try {
      let response = await fetch(this._dataSource);

      if (response.ok) {
        let data = await response.json();

        const advertisementInstances = [];

        for (let advertisement of data) {
          const advertisementInstance = new PropertyAdvertisement(
            advertisement.id,
            advertisement.title,
            advertisement.cover,
            advertisement.pictures,
            advertisement.description,
            advertisement.host,
            advertisement.rating,
            advertisement.location,
            advertisement.equipments,
            advertisement.tags
          );

          advertisementInstances.push(advertisementInstance);
        }

        return new PropertyAdvertisementsList(advertisementInstances);
      } else {
        console.error(
          `HTTP-Error-${response.status} while fetching ${this._dataSource}`
        );
      }
    } catch (err) {
      console.error(
        `An error as occured while fetching ${this._dataSource} : ${err}`
      );
    }
  }
}
