export type CategoryT = {
  id: number;
  name: string;
  color: string;
  attributes: {
    name?: string,
    icon: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  };
};

export type ProductT = {
  id: number;
  attributes: {
    name: string,
    description?: string,
    mrp?: number,
    sellingPrice: number,
    itemQuantityType?: string,
    categories: {
      data: {
        attributes: {
          name: string;
        }
      }
    },
    slug?: string,
    images: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  };
};

export type SliderT = {
  id: number;
  attributes: {
    url: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
};

export type CategoryStoreT = {
  categories: CategoryT[];
  fetchCategories: () => Promise<void>;
};

export type SliderStoreT = {
  sliders: SliderT[];
  fetchSliders: () => Promise<void>;
};


export interface SliderProps { sliderList: SliderT[] }
export interface CategoryProps { categoryList: CategoryT[] }
export interface ProductProps { productList: ProductT[] }

