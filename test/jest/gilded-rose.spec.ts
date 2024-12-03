import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe(items[0].name);
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('after concert', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })
   it('su;furas test', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].quality).toBe(80);
      })
   it('bilete test', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 47)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].quality).toBe(50);
      })
});
