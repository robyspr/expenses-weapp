<template>
  <card>
    <h4 slot="header" class="card-title">New Expense</h4>
    <form>
      <b-button v-b-toggle:my-collapse>
        <span class="when-open">Ganancia</span><span class="when-closed">Gasto</span>
      </b-button>

      <div class="row">
        <div class="col-md-5">
          <base-input type="number"
                    label="Amount"
                    placeholder="Add the expense's amount"
                    v-model="expense.amount">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Detail"
                    placeholder="What's the expense about?"
                    v-model="expense.details">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="date"
                    label="Date"
                    placeholder="date"
                    v-model=expense.date>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <label for="mop">Method of Payment</label>
          <b-form-select v-model="expense.selected" id="mop" :options="expense.options" value-field="value" text-field="text">
          </b-form-select>
        </div>
      </div>

      <b-collapse visible id="my-collapse">
        <div class="row">
          <div class="col-md-6">
            <label for="type">Type</label>
            <b-form-select v-model="expense.selectedType" id="type" :options="expense.optionsType" value-field="value" text-field="text">
            </b-form-select>
          </div>
        </div>
      </b-collapse>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="uploadExpense">
          Upload expense
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        expense: {
          amount: 0,
          details: 'michael23',
          date: new Date().toLocaleDateString('sv'),
          selected: 'MP',
          options: [
            { text: 'Mercado Pago', value: 'MP' },
            { text: 'Banco Macro', value: 'BM' },
            { text: 'Banco BBVA', value: 'BB' },
            { text: 'Efectivo', value: 'E' }
          ],
          selectedType: '1',
          optionsType: [
            { text: 'Food', value: '1' },
            { text: 'Transportation', value: '2' },
            { text: 'Uni', value: '3' }
          ]
        }
      }
    },
    methods: {
      uploadExpense () {
        alert('Your data: ' + JSON.stringify(this.expense))
      }
    }
  }

</script>
<style>

</style>
